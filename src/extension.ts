import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.replaceClassNames', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('Open a file to replace classNames');
            return;
        }

        const document = editor.document;
        const text = document.getText();

        const regexPattern = /className="([A-Za-z0-9]+)"/g;
        const replacementString = `className={style.$1}`;

        const edit = new vscode.WorkspaceEdit();
        const fullRange = new vscode.Range(
            document.positionAt(0),
            document.positionAt(text.length)
        );
        edit.replace(document.uri, fullRange, text.replace(regexPattern, replacementString));

        vscode.workspace.applyEdit(edit).then(success => {
            if (success) {
                vscode.window.showInformationMessage('classNames replaced successfully!');
            } else {
                vscode.window.showErrorMessage('Error replacing classNames.');
            }
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
