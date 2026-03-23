from setuptools import setup, find_packages

with open("requirements.txt") as f:
    install_requires = f.read().strip().split("\n")

setup(
    name="hyperhex_theme",
    version="1.0.0",
    description="HyperHex Solutions — Custom Dark Theme for ERPNext v15",
    author="HyperHex Solutions",
    author_email="hello@hyperhexsolutions.com",
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=install_requires,
)
