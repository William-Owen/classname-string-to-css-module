Replace ClassNames with Style Extension
=======================================

This VSCode extension automatically finds and replaces all `className` attributes with a `className` that references a `style` object. It's designed to streamline the process of converting standard CSS class references into a format compatible with CSS Modules or similar CSS-in-JS solutions.

Features
--------

* **Whole Document Conversion**: Easily convert all `className="..."` references in the current document to `className={style...}` format with a single command.
* **Seamless Integration**: Works with your existing VSCode setup and enhances your workflow without disrupting your development process.
* **Customizable**: Though it works out-of-the-box, advanced users can customize it to fit their specific needs.

Getting Started
---------------

### Installation

This extension can be installed directly from the Visual Studio Code Marketplace. Search for "Replace ClassNames with Style" and click "Install."

Alternatively, you can download the `.vsix` file from the releases section of the GitHub repository and install it manually using the following command:

bashCopy code

`code --install-extension replace-classnames-with-style-0.0.1.vsix`

### Usage

To use the extension, follow these steps:

1.  Open the document you wish to modify.
2.  Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS) to open the Command Palette.
3.  Type "Replace ClassNames with style object" and hit Enter.

The extension will automatically replace all instances of `className="..."` with `className={style...}` within the current document.

Contributing
------------

We welcome contributions to this project! If you're interested in improving the "Replace ClassNames with Style" extension, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or fix.
3.  Commit your changes with clear, descriptive commit messages.
4.  Push your branch and submit a pull request.

For more details, check out our [CONTRIBUTING](CONTRIBUTING.md) guide.

License
-------

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
---------------

*   Thank you to the VSCode community for the continuous support and inspiration.
*   This extension was inspired by the need for a more efficient way to work with CSS Modules and CSS-in-JS solutions.