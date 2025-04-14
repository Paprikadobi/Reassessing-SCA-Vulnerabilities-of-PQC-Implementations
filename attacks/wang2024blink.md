---
source: https://eprint.iacr.org/2024/036
year: 2024
authors: Jian Wang, Weiqiong Cao, Hua Chen, Haoyuan Li
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
  - masking
target:
  - encoder
techniques:
  - profiling/deep-learning
---
# Blink: Breaking Lattice-Based Schemes Implemented in Parallel with Chosen-Ciphertext Attack

For masking to be effective the shares must be processed in different cycles.

