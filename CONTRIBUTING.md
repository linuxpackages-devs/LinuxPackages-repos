# Contributing to LinuxPackages Repositories

Thank you for helping expand LinuxPackages! We welcome repository additions from community members, maintainers, and Linux distribution teams.

---

## Directory Organization

Repositories are organized in dedicated folders by Linux distribution:

- `repos/debian/`: Debian distributions and third-party Debian repositories
- `repos/ubuntu/`: Ubuntu releases, PPAs, and external Ubuntu repositories
- `repos/arch/`: Arch Linux official repositories and AUR
- `repos/alpine/`: Alpine Linux release branches and edge
- `repos/almalinux/`: AlmaLinux OS official repositories
- `repos/cloudlinux/`: CloudLinux OS releases and RPM repomd repositories

---

## Submission Guidelines

### 1. Requirements for Added Repositories
- The repository must be publicly accessible over HTTP or HTTPS.
- The repository index files (`Packages.gz` for Debian/Ubuntu, `.db.tar.gz` for Arch, `APKINDEX.tar.gz` for Alpine, or `repomd.xml` for RPM) must be valid and downloadable.
- The repository must not contain malicious software or security hazards.

### 2. Format
Create a new JSON file named after your repository (e.g., `repos/debian/my-custom-repo.json`):

```json
{
  "name": "My Custom Repository",
  "distro": "debian",
  "base_url": "https://example.org/debian",
  "branch_or_suite": "bookworm",
  "component": "main",
  "arch": "amd64"
}
```

### 3. Review Process
1. **Automated CI Check**: GitHub Actions will automatically run validation on your PR:
   - Validates JSON format and ensures file is in the matching `repos/<distro>/` folder.
   - Validates all required fields (`name`, `distro`, `base_url`, `arch`).
   - Verifies reachability of the index endpoint.
2. **Peer Review**: A maintainer will review the PR for security, appropriateness, and deduplication.
3. **Merge**: Once approved, your PR will be merged into `main`. The LinuxPackages engine will automatically sync and index packages within the next sync cycle.
