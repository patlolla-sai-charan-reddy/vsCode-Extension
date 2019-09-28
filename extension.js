// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	vscode.workspace.onDidSaveTextDocument(onSaveMessages)
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() { }

function onSaveMessages() {
	vscode.window.showInformationMessage('Make sure it follows ETC and DRY')
}

module.exports = {
	activate,
	deactivate
}
