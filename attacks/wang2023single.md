---
source: https://eprint.iacr.org/2023/1931
year: 2023
authors: Ruize Wang, Kalle Ngo, Joel Gärtner, Elena Dubrova
family:
  - lattice/M-LWE
  - lattice/M-SIS
  - DSA
scheme:
  - Dilithium
scenario: static key
leaked: secret key
implementation:
  - SW
adversarial:
  - observe
  - profile
possible countermeasures:
  - masking
  - constant-weight encoding of secret key
target:
  - packing/key
techniques:
  - profiling/deep-learning
---
## Single-Trace Side-Channel Attacks on CRYSTALS-Dilithium: Myth or Reality?

