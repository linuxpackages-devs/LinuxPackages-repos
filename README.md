# LinuxPackages Repositories Catalog

Official repository definitions catalog for [LinuxPackages](https://github.com/linuxpackages-devs/LinuxPackages).

This repository contains the curated list of Linux software repositories indexed and searchable on the LinuxPackages search engine (Debian, Ubuntu, Arch Linux, Alpine Linux, CloudLinux, and community repositories).

---

## 🚀 How It Works

Instead of uncontrolled in-app submissions, all Linux package repositories indexed by LinuxPackages are maintained here under version control.

1. Anyone in the community can propose a new repository by submitting a **Pull Request**.
2. Automated GitHub Actions validate the configuration syntax and test repository index accessibility.
3. Once reviewed and merged by maintainers, the **LinuxPackages** indexing engine automatically discovers the new repository and begins indexing all its packages!

---

## 📦 Repository Catalog

All repositories are cataloged in [`repositories.json`](./repositories.json).

Each repository entry defines:
- `name`: Human-readable name of the repository (e.g. `Debian 12 Bookworm Main`).
- `distro`: Distribution family (`debian`, `ubuntu`, `arch`, `alpine`, or `cloudlinux`).
- `base_url`: Base mirror URL or repository root.
- `branch_or_suite`: Suite or release branch name (e.g. `bookworm`, `noble`, `core`, `v3.20/main`).
- `component`: Component name (e.g. `main`, `extra`, `community`).
- `arch`: Architecture (e.g. `amd64`, `x86_64`, `aarch64`).

---

## 🤝 How to Add a Repository

To add a new repository:

1. **Fork** this repository.
2. Edit `repositories.json` and append your repository definition.
3. Ensure all URLs and required fields are accurate.
4. **Open a Pull Request** describing the repository, its purpose, and any verification steps.
5. Once your PR is reviewed and approved, it will be merged into `main` and automatically picked up by LinuxPackages!

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines and examples.

---

## 📄 License

The repository definitions and configurations in this catalog are released under the [MIT License](LICENSE).
