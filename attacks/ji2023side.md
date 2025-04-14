---
source: https://ieeexplore.ieee.org/abstract/document/10174000
year: 2023
authors: Yanning Ji, Ruize Wang, Kalle Ngo, Elena Dubrova, Linus Backlund
family:
  - lattice/M-LWE
  - KEM
scheme:
  - Kyber
scenario: static key
leaked: secret key
implementation:
  - HW
adversarial:
  - observe
  - choose ciphertext
  - profile without clone
possible countermeasures: 
target:
  - decapsulation
techniques:
  - profiling/deep-learning
---
# A Side-Channel Attack on a Hardware Implementation of CRYSTALS-Kyber

