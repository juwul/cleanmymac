import { closeMainWindow } from "@raycast/api";
import { runAppleScript } from "run-applescript";

export default async () => {
    await closeMainWindow();
    // const startSmartScan = await runAppleScript
    //     (
    //         `
    //         tell application "CleanMyMac X" to activate
    //         tell application "System Events" to tell process "CleanMyMac X" to ¬
    //         click menu item 1 of menu 1 of ¬
    //         menu bar item 6 of menu bar 1
    //         `
    //     )

    await runAppleScript
        (
            `
        tell application "CleanMyMac X" to activate

        tell application "System Events" to tell process "CleanMyMac X" to ¬
        click menu item 10 of menu 1 of ¬
        menu bar item 6 of menu bar 1
        tell application "System Events" to tell process "CleanMyMac X" to ¬
        click menu item 10 of menu 1 of ¬
        menu bar item 6 of menu bar 1
        tell application "System Events" to tell process "CleanMyMac X" to ¬
        click menu item 10 of menu 1 of ¬
        menu bar item 6 of menu bar 1
        tell application "System Events" to tell process "CleanMyMac X" to ¬
        click menu item 10 of menu 1 of ¬
        menu bar item 6 of menu bar 1
        tell application "System Events" to tell process "CleanMyMac X" to ¬
        click menu item 10 of menu 1 of ¬
        menu bar item 6 of menu bar 1
        tell application "System Events" to tell process "CleanMyMac X" to ¬
        click menu item 10 of menu 1 of ¬
        menu bar item 6 of menu bar 1

        tell application "System Events" to tell process "CleanMyMac X" to ¬
        click menu item 9 of menu 1 of ¬
        menu bar item 6 of menu bar 1
        tell application "System Events" to tell process "CleanMyMac X" to ¬
        click menu item 9 of menu 1 of ¬
        menu bar item 6 of menu bar 1
        tell application "System Events" to tell process "CleanMyMac X" to ¬
        click menu item 9 of menu 1 of ¬
        menu bar item 6 of menu bar 1
        `
        )



    // const secondMenuItemState = await runAppleScript
    //     (
    //         `
    //         tell application "System Events" to tell process "CleanMyMac X" to ¬
    //         menu item 1 of menu 1 of ¬
    //         menu bar item 5 of menu bar 1
    //         `
    //     )
    //     const secondMenuItemAction = await runAppleScript
    //     (
    //         `
    //         tell application "System Events" to tell process "CleanMyMac X" to ¬
    //         click menu item 2 of menu 1 of ¬
    //         menu bar item 5 of menu bar 1
    //         `
    //     )

    const firstMenuItemAction = await runAppleScript
        (
            `
            tell application "System Events" to tell process "CleanMyMac X" to ¬
            click menu item 1 of menu 1 of ¬
            menu bar item 5 of menu bar 1
            `
        )

    const closeAction = await runAppleScript
        (
            `
            tell application "System Events" to tell process "CleanMyMac X" to ¬
            click menu item 1 of menu 1 of ¬
            menu bar item 3 of menu bar 1
            `
        )


    let shouldLoop = true
    let state: 'scan' | 'stop' | 'empty' | undefined;
    // let whileLooped = false;

    while (shouldLoop) {
        const firstMenuItemState = await runAppleScript
            (
                `
            tell application "System Events" to tell process "CleanMyMac X" to ¬
            menu item 1 of menu 1 of ¬
            menu bar item 5 of menu bar 1
            `
            )
            console.log(firstMenuItemState);
            

        if (firstMenuItemState.includes('Scan') && !state) {
            // default flow, scan, wait, and empty, lastly close the app.
            state = 'scan';
            console.log('Scan started');
            // firstMenuItemAction;

        } else if (firstMenuItemState.includes('Empty')) {
            // empty it, close app.
            shouldLoop = false;
            state = 'empty';
            console.log('Empty bin');
            // firstMenuItemAction;
        }

        console.log('Looped');

    }

    closeAction

    // commands for selectTrashBin():
    // "menu item"          =>      the item inside a, maybe devided, dropdown menu (dividers count as 1 item)
    // "menu"               =>      the menu number in a dropdown menu
    // "menu bar item"      =>      the number which the dropdown menu is (apple is 1)
    // "menu bar"           =>      1 is default???


    // console.log(selectTrashBin);



};
