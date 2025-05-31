const nameRegex = new RegExp("^[A-Za-z\s]+$");  

    // Ganti jadi 'pattern RegEx Untuk Memeriksa Password Yang Kuat' yang ada di Notion
    const nimRegex = new RegExp("^[0-9]{9}$");  

    // Ganti sesuai kreativitas kalian    
    const emailRegex = new RegExp ("^[a-zA-Z0-9._%+-]+@gmail.com$"); 

    function validateInput(id, regex, validMessage, invalidMessage) {
    let input = document.getElementById(id);
    let messageSpan = document.getElementById(id + "Message");
    
    input.addEventListener("input", function() {
    if (regex.test(input.value)) {
        // Valid input
        input.classList.add("valid");
        input.classList.remove("invalid");
        messageSpan.textContent = validMessage;
        messageSpan.classList.add("valid-message");
        messageSpan.classList.remove("invalid-message");
    } else {
        // Invalid input
        if (input.value.trim() !== '') {
            input.classList.add("invalid");
            input.classList.remove("valid");
            messageSpan.textContent = invalidMessage;
            messageSpan.classList.add("invalid-message");
            messageSpan.classList.remove("valid-message");
        } else {
            // kalau input kosong
            input.classList.remove("valid", "invalid");
            messageSpan.textContent = '';
            messageSpan.classList.remove("valid-message", "invalid-message");
        }
    }
});
    }
    
    validateInput("name", nameRegex, "Valid", "Nama hanya boleh mengandung huruf.");

    //Ganti jadi pattern 'RegEx Untuk Memeriksa Password Yang Kuat' yang ada di Notion
    validateInput("nim", nimRegex, "Valid", "NIM harus 9 digit angka.");

    // Ganti sesuai kreativitas kalian 
    validateInput("email", emailRegex, "Valid", "Email harus memiliki domain gmail.");