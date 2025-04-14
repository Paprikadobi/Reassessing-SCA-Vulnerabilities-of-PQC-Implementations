---
source: https://dr.ntu.edu.sg/handle/10356/169834
year: 2023
authors: Gokulnath Rajendran,Prasanna Ravi, Jan-Pieter D’anvers, Shivam Bhasin, Anupam Chattopadhyay
family:
  - lattice/M-LWE
  - KEM
scheme:
  - Kyber
scenario: static key
leaked: secret key
implementation:
  - SW
  - shuffled
adversarial:
  - observe
  - choose ciphertext
  - profile without clone
possible countermeasures:
  - masking
target:
  - encoder
techniques:
  - DEMA
---
# Pushing the limits of generic side-channel attacks on LWE-based KEMs-parallel PC oracle attacks on Kyber KEM and beyond

- distinguish attacks dependent on the target and independent