# LinuxPackages Repositories Catalog

Official repository definitions catalog for [LinuxPackages](https://github.com/linuxpackages-devs/LinuxPackages).

This repository contains the curated list of Linux software repositories indexed and searchable on the LinuxPackages search engine (Debian, Ubuntu, Arch Linux, Alpine Linux, CloudLinux, and community repositories).

---

## 🚀 How It Works

Instead of uncontrolled in-app submissions or a single monolithic file, all Linux package repositories indexed by LinuxPackages are maintained in modular files organized by operating system:

```
repos/
  ├── debian/          # Debian repositories (.json)
  ├── ubuntu/          # Ubuntu repositories & PPAs (.json)
  ├── arch/            # Arch Linux & AUR (.json)
  ├── alpine/          # Alpine Linux APKINDEX repositories (.json)
  └── cloudlinux/      # CloudLinux & RPM repomd repositories (.json)
```

1. Anyone in the community can propose a new repository by adding a single JSON file under `repos/<distro>/<repo-name>.json` and submitting a **Pull Request**.
2. Automated GitHub Actions validate the configuration syntax and test repository index accessibility.
3. Once reviewed and merged by maintainers, the **LinuxPackages** indexing engine automatically discovers the new repository and begins indexing all its packages!

---

## 📦 Repository Definition Format

Each repository is defined in its own file under `repos/<distro>/`:

```json
{
  "name": "NGINX Official Stable (Debian Bookworm)",
  "distro": "debian",
  "base_url": "http://nginx.org/packages/debian",
  "branch_or_suite": "bookworm",
  "component": "nginx",
  "arch": "amd64"
}
```

Fields:
- `name`: Human-readable name of the repository.
- `distro`: Distribution family (`debian`, `ubuntu`, `arch`, `alpine`, or `cloudlinux`).
- `base_url`: Base mirror URL or repository root.
- `branch_or_suite`: Suite or release branch name (e.g. `bookworm`, `noble`, `core`, `v3.20/main`).
- `component`: Component name (e.g. `main`, `extra`, `community`, `nginx`).
- `arch`: Architecture (e.g. `amd64`, `x86_64`, `aarch64`).

---

## 🤝 How to Add a Repository

To add a new repository:

1. **Fork** this repository.
2. Create a new `.json` file in `repos/<distro>/<your-repo-name>.json`.
3. Fill in the repository details following the schema.
4. Run `node build.js` to compile the manifest (optional; CI compiles automatically).
5. **Open a Pull Request** describing the repository and its purpose.
6. Once merged into `main`, LinuxPackages will automatically index your repository!

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

---

## 📄 License

The repository definitions and configurations in this catalog are released under the [MIT License](LICENSE).
