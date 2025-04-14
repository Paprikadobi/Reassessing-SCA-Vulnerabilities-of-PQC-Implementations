---
source: https://tches.iacr.org/index.php/TCHES/article/view/10971
year: 2023
authors: Yutaro Tanaka, Rei Ueno, Keita Xagawa, Akira Ito, Junko Takahashi, Naofumi Homma
family:
  - lattice
  - code
  - isogeny
  - KEM
scheme:
  - Kyber
  - Saber
  - Frodo
  - NTRU Prime
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
target:
  - FO transformation
techniques:
  - profiling/deep-learning
---
# Multiple-Valued Plaintext-Checking Side-Channel Attacks on Post-Quantum KEMs