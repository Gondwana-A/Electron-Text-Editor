const { ipcRenderer } = require("electron")

const editor = document.getElementById("editor")
const openBtn = docuement.getElementById("openBtn")
const saveBtn = docuement.getElementById("saveBtn")

openBtn.addEventListener("click", () => {
	ipcRenderer.send("open-file-dialog")
})

saveBtn.addEventListener("click", () => {
	const content = editor.value
	ipcRenderer.send("save-file-dialog", content)
})

ipcRenderer.on("open-file", (event, filePath, fileContent) => {
	editor.value = fileContent
})
