const fs = require('fs');
const path = require('path');

const reposDir = path.join(__dirname, 'repos');
const distros = fs.readdirSync(reposDir).filter(d => fs.statSync(path.join(reposDir, d)).isDirectory());

const compiledRepos = [];
const seenKeys = new Set();

for (const distro of distros) {
    const distroDir = path.join(reposDir, distro);
    const files = fs.readdirSync(distroDir).filter(f => f.endsWith('.json'));

    for (const file of files) {
        const filePath = path.join(distroDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        let parsed;
        try {
            parsed = JSON.parse(content);
        } catch (e) {
            console.error(`Invalid JSON in ${distro}/${file}:`, e.message);
            process.exit(1);
        }

        if (parsed.distro !== distro) {
            console.error(`Mismatch in ${distro}/${file}: 'distro' field is '${parsed.distro}' but file is in '${distro}' folder.`);
            process.exit(1);
        }

        const uniqueKey = `${parsed.base_url}|${parsed.branch_or_suite || ''}|${parsed.component || ''}`;
        if (seenKeys.has(uniqueKey)) {
            console.warn(`Warning: Duplicate repository key in ${distro}/${file}: ${uniqueKey}`);
        }
        seenKeys.add(uniqueKey);

        compiledRepos.push(parsed);
    }
}

// Sort alphabetically by distro and then name
compiledRepos.sort((a, b) => {
    if (a.distro !== b.distro) return a.distro.localeCompare(b.distro);
    return a.name.localeCompare(b.name);
});

const manifest = {
    $schema: './schema.json',
    version: 1,
    description: 'LinuxPackages Official & Community Repositories Compiled Manifest',
    updated_at: new Date().toISOString(),
    total_repositories: compiledRepos.length,
    repositories: compiledRepos
};

fs.writeFileSync(path.join(__dirname, 'index.json'), JSON.stringify(manifest, null, 2) + '\n', 'utf8');

console.log(`Successfully compiled ${compiledRepos.length} repositories across ${distros.length} distributions into index.json.`);
