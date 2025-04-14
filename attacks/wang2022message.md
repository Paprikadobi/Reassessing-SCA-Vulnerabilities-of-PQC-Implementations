---
source: https://link.springer.com/chapter/10.1007/978-3-031-29371-9_22
year: 2023
authors: Ruize Wang, Kalle Ngo, Elena Dubrova
family:
  - lattice/LWE
  - lattice/LWR
  - KEM
scheme:
  - Kyber
  - Saber
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
  - decoder
techniques:
  - profiling/deep-learning
---
# A Message Recovery Attack on LWE/LWR-Based PKE/KEMs Using Amplitude-Modulated EM Emanations