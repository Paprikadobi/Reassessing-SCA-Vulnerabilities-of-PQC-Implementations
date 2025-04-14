---
source: https://dl.acm.org/doi/full/10.1145/3569420
year: 2024
authors: Catinca Mujdei, Lennert Wouters, Angshuman Karmakar, Arthur Beckers, Jose Maria Bermudo Mera, Ingrid Verbauwhede
family:
  - lattice/LWE
  - lattice/LWR
  - KEM
scheme:
  - NTRU
  - Kyber
  - Saber
scenario: static key
leaked: secret key
implementation:
  - SW
adversarial:
  - observe
possible countermeasures:
  - masking
  - hiding
target:
  - NTT
  - Toom-Cook
techniques:
  - CPA
traces: 200
---
# Side-channel Analysis of Lattice-based Post-quantum Cryptography: Exploiting Polynomial Multiplication

