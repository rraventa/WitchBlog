window.addEventListener('load', () => {
    let form = document.querySelector(".life-quotes-form");
    let input = document.querySelector(".quote-input");
    let listOfQuotes = document.querySelector(".quotes");

    let quotesArray = [];
    let savedArray = JSON.parse(localStorage.getItem('quotes_'));


    savedArray.forEach(function (e) {
        const quoteRestoreBlock = document.createElement('div');
        quoteRestoreBlock.classList.add('quote');
        const quoteRestoreContent = document.createElement('div');
        quoteRestoreContent.classList.add('content');
        const quoteRestoreInput = document.createElement('input');
        quoteRestoreInput.classList.add('input-text');
        quoteRestoreInput.type = 'text';
        quoteRestoreInput.value = e;
        quoteRestoreInput.setAttribute('readonly', 'readonly');

        quoteRestoreBlock.appendChild(quoteRestoreContent);
        quoteRestoreContent.appendChild(quoteRestoreInput);
        quotesArray.push(quoteRestoreInput.value);

        const actionsRestore = document.createElement('div');
        actionsRestore.classList.add('actions');

        const editRestore = document.createElement('button');
        editRestore.classList.add('edit');
        editRestore.innerText = 'Edit';

        const removeRestore = document.createElement('button');
        removeRestore.classList.add('remove');
        removeRestore.innerText = 'Remove';

        actionsRestore.appendChild(editRestore);
        actionsRestore.appendChild(removeRestore);

        quoteRestoreBlock.appendChild(actionsRestore);

        listOfQuotes.appendChild(quoteRestoreBlock);

        editRestore.addEventListener('click', (e) => {
            let temp = quoteRestoreInput.value;
            if (editRestore.innerText.toLowerCase() === "edit") {
                editRestore.innerText = "Save";
                quoteRestoreInput.removeAttribute("readonly");
                quoteRestoreInput.focus();
            } else {
                editRestore.innerText = "Edit";
                quoteRestoreInput.setAttribute("readonly", "readonly");
            }
            let ind = quotesArray.indexOf(temp);
            quotesArray.splice(ind, 1, quoteRestoreInput.value);
            localStorage.setItem('quotes_', JSON.stringify(quotesArray))
        });

        removeRestore.addEventListener('click', (e) => {
            listOfQuotes.removeChild(quoteRestoreBlock);
            const index = quotesArray.indexOf(quoteRestoreInput.value);
            if (index > -1) {
                quotesArray.splice(index, 1);
                localStorage.setItem('quotes_', JSON.stringify(quotesArray))
            }
        });

    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const quoteBlock = document.createElement('div');
        quoteBlock.classList.add('quote');
        const quoteContent = document.createElement('div');
        quoteContent.classList.add('content');
        const quoteInput = document.createElement('input');
        quoteInput.classList.add('input-text');
        quoteInput.type = 'text';
        quoteInput.value = input.value;
        quoteInput.setAttribute('readonly', 'readonly');

        quoteBlock.appendChild(quoteContent);
        quoteContent.appendChild(quoteInput);
        quotesArray.push(quoteInput.value);

        const actions = document.createElement('div');
        actions.classList.add('actions');

        const edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerText = 'Edit';

        const remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerText = 'Remove';

        actions.appendChild(edit);
        actions.appendChild(remove);

        quoteBlock.appendChild(actions);

        listOfQuotes.appendChild(quoteBlock);

        input.value = '';

        edit.addEventListener('click', (e) => {
            let temp = quoteInput.value;
            if (edit.innerText.toLowerCase() === "edit") {
                edit.innerText = "Save";
                quoteInput.removeAttribute("readonly");
                quoteInput.focus();
            } else {
                edit.innerText = "Edit";
                quoteInput.setAttribute("readonly", "readonly");
            }
            let ind = quotesArray.indexOf(temp);
            quotesArray.splice(ind, 1, quoteInput.value);
            localStorage.setItem('quotes_', JSON.stringify(quotesArray))
        });

        remove.addEventListener('click', (e) => {
            listOfQuotes.removeChild(quoteBlock);
            const index = quotesArray.indexOf(quoteInput.value);
            if (index > -1) { // only splice array when item is found
                quotesArray.splice(index, 1);
                localStorage.setItem('quotes_', JSON.stringify(quotesArray))
            }
        });
        
        console.log(quotesArray);
        localStorage.setItem('quotes_', JSON.stringify(quotesArray));
    });
});