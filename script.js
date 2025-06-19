//your JS code here. If required.
const output = document.getElementById('output');

function createPromise(index) {
  const delay = (Math.random() * 2 + 1).toFixed(3); 
  return new Promise(resolve => {
	setTimeout(() => {
	  resolve({ label: `Promise ${index}`, time: parseFloat(delay) });
	}, delay * 1000);
  });
}

const startTime = performance.now();
const promises = [1, 2, 3].map(createPromise);

Promise.all(promises).then(results => {
  const endTime = performance.now();
  const totalTime = ((endTime - startTime) / 1000).toFixed(3);


  output.innerHTML = '';

 
  results.forEach(result => { 
	const row = document.createElement('tr');
	row.innerHTML = `<td>${result.label}</td><td>${result.time.toFixed(3)}</td>`;
	output.appendChild(row);
  }); 

  
  const maxTime = Math.max(...results.map(r => r.time)).toFixed(3);
  const totalRow = document.createElement('tr'); 
  totalRow.innerHTML = `<td><strong>Total</strong></td><td>${maxTime}</td>`;
  output.appendChild(totalRow);
});