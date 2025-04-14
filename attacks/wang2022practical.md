---
source: https://eprint.iacr.org/2022/859
year: 2022
authors: Jian Wang, Weiqiong Cao, Hua Chen, Haoyuan Li
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
  - profile without clone
possible countermeasures: 
target:
  - encoder
techniques:
  - profiling/deep-learning
---
# Practical Side-Channel Attack on Masked Message Encoding in Latticed-Based KEM

