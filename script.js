body {
  margin: 0;
  font-family: Arial;
  background: #f9fafb;
}

header {
  background: linear-gradient(90deg, #f4b400, #ffd54f);
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}

nav {
  display: flex;
  background: #111;
}

nav button {
  flex: 1;
  padding: 12px;
  border: none;
  background: #111;
  color: white;
  cursor: pointer;
}

nav button:hover {
  background: #f4b400;
  color: black;
}

section {
  display: none;
  padding: 20px;
}

.active {
  display: block;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.destaque {
  background: #000;
  color: #f4b400;
}

input, select {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
}

button {
  width: 100%;
  padding: 10px;
  background: #f4b400;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.tag {
  background: #f4b400;
  padding: 4px 8px;
  border-radius: 5px;
  margin-left: 5px;
  font-size: 12px;
}

.progress {
  height: 10px;
  background: #eee;
  border-radius: 5px;
  margin-top: 5px;
}

.bar {
  height: 10px;
  background: #f4b400;
  border-radius: 5px;
}

#alerta {
  font-size: 12px;
  color: red;
}
