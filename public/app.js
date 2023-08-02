document.querySelectorAll('.maosh').forEach(Node => {
    Node.textContent = new Intl.NumberFormat().format(Node.textContent);
});