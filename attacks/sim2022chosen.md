---
source: https://ieeexplore.ieee.org/abstract/document/9786796
year: 2022
authors: Bo-Yeon Sim, Aesun Park, Dong-Guk Han
family:
  - lattice/M-LWE
  - KEM
scheme:
  - Kyber
scenario: static key
leaked: secret key
implementation:
  - SW
adversarial:
  - observe
  - choose ciphertext
  - profile without clone
possible countermeasures:
  - masking
  - shuffling
target:
  - Barrett reduction
techniques:
  - profiling/template
implementation source: PQM4
---
# Chosen-Ciphertext Clustering Attack on CRYSTALS-KYBER Using the Side-Channel Leakage of Barrett Reduction

