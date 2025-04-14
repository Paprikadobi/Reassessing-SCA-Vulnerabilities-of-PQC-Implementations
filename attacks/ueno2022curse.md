---
source: https://tches.iacr.org/index.php/TCHES/article/view/9298
year: 2021
authors: Rei Ueno, Keita Xagawa, Yutaro Tanaka, Akira Ito, Junko Takahashi, Naofumi Homma
family:
  - lattice
  - code
  - isogeny
  - KEM
scheme:
  - Kyber
  - Saber
  - Frodo
  - NTRU
  - HQC
  - SIKE
scenario: static key
leaked: secret key
implementation:
  - SW
adversarial:
  - observe
  - choose ciphertext
  - profile without clone
possible countermeasures:
  - masking/threshold implementation
target:
  - FO transformation
techniques:
  - profiling/deep-learning
---
# Curse of Re-encryption: A Generic Power/EM Analysis on Post-Quantum KEMs

