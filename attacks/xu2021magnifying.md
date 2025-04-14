---
source: https://ieeexplore.ieee.org/abstract/document/9591340
year: 2021
authors: Zhuang Xu, Owen Pemberton, Sujoy Sinha Roy, David Oswald, Wang Yao, Zhiming Zheng
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
possible countermeasures:
  - detect malicious ciphertexts
target:
  - decoder
  - pointwise multiplication
techniques:
  - SPA
implementation source: PQClean_Kyber512
---
# Magnifying Side-Channel Leakage of Lattice-Based Cryptosystems With Chosen Ciphertexts: The Case Study of Kyber

