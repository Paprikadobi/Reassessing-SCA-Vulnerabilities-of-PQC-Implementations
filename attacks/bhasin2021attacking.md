---
source: https://tches.iacr.org/index.php/TCHES/article/view/8977
year: 2021
authors: Shivam Bhasin, Jan-Pieter D’Anvers, Daniel Heinz, Thomas Pöppelmann, Michiel Van Beirendonck
family:
  - lattice/M-LWE
  - KEM
scheme:
  - Kyber
scenario: static key
leaked: secret key
implementation:
  - SW
  - masked
adversarial:
  - observe
  - choose ciphertext
possible countermeasures:
  - constant-time
target:
  - FO transformation
techniques:
  - DPA
  - cryptanalysis
implementation source: BPO20 OSPG18
---
# Attacking and Defending Masked Polynomial Comparison for Lattice-Based Cryptography

