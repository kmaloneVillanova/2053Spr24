console.log(document);

function testTheDOM() {
    let nodes = document.getElementsByTagName("li");
    console.log(nodes);
    console.log(nodes.length);

    for(let i=0;i<nodes.length;i++) {
        console.log(nodes[i].innerHTML);
        console.log(nodes[i].textContent);
    }
    document.getElementById("checking").textContent="CHANGED!";
}

function depositChecking() {
    let checkingNode = document.getElementById("checking");
    let checkingInt = parseInt(checkingNode.textContent, 10);
    checkingInt += 100;
    checkingNode.textContent = checkingInt;
}

function depositSavings() {
    /*get value of html element with id savings*/
    var td = document.getElementById('savings');
    var savings = td.textContent;
    /*convert string to integer*/
    savings = parseInt(savings,10);
    /* if savings is 0, we need to change the title from Alert back to Bank Account */
    if(savings == 0) {
        var title = document.getElementById('bankAccountTitle');
        title.textContent="Bank Account";
    }
    savings += 100;
    td.textContent=savings;
}

function emptySavings() {
    /*get value of html element with id savings*/
    var td = document.getElementById("savings");
    td.textContent = 0;
    var title = document.getElementById('bankAccountTitle');
    /*change value of title */
    title.textContent="ALERT: Savings Empty";
}