---
source: https://link.springer.com/chapter/10.1007/978-3-031-17234-2_16
year: 2022
authors: Thomas Schamberger, Lukas Holzbaur, Julian Renner, Antonia Wachter-Zeh, Georg Sigl
family:
  - code
  - KEM
scheme:
  - HQC
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
  - decoder/Reed-Solomon
  - SHAKE256
techniques:
  - profiling/template
  - profiling/deep-learning
  - cryptanalysis
---
# A Power Side-Channel Attack on the Reed-Muller Reed-Solomon Version of the HQC Cryptosystem

They identified the attack described in [[ueno2022curse]] does not apply to HQC.

