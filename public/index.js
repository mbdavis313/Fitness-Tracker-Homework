// *** File will make calcilations from the backend and sendit to the front end. ***


let workouts = [];
let myChart;

fetch("/api/workout")
  .then(response => response.json())
  .then(data => {
    // save db data on global variable
    workouts = data;
    console.log(workouts);
    workouts.forEach(element => {
      // Creates Table Row
      const tableRow = document.createElement("tr");
      const exercise = document.createElement("td");
      const time = document.createElement("td");
      const speed = document.createElement("td");
      const distance = document.createElement("td");
      const laps = document.createElement("td");
      exercise.innerText = element.exercise;
      time.innerText = element.time;
      speed.innerText = element.speed;
      distance.innerText = element.distance;
      laps.innerText = element.laps;
      tableRow.append(exercise);
      tableRow.append(time);
      tableRow.append(speed);
      tableRow.append(distance);
      tableRow.append(laps);
      document.getElementById("js-workouts").append(tableRow);
    });
    // populateTotal();
    // populateTable();
    // populateChart();
  });

// <button id="sub-btn">Submit</button>
document.getElementById("sub-btn").addEventListener("click", function(e) {
  e.preventDefault()
  const workout = {
  exercise: document.getElementById("exercise").value,
  time: document.getElementById("time").value,
  distance: document.getElementById("distance").value,
  speed: document.getElementById("speed").value,
  laps: document.getElementById("laps").value
  }
  console.log(workout);

  fetch("/api/workout", {
        method: "POST",
        body: JSON.stringify(workout),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
})









// function populateTotal() {
//   // reduce transaction amounts to a single total value
//   const total = workouts.reduce((total, t) => {
//     return total + parseInt(t.value);
//   }, 0);

// function populateTable() {
//   const tbody = document.querySelector("#tbody");
//   tbody.innerHTML = "";

//   workouts.forEach(workout => {
//     // create and populate a table row
//     const tr = document.createElement("tr");
//     tr.innerHTML = `
//       <td>${workout.name}</td>
//       <td>${workout.value}</td>
//     `;

//     tbody.appendChild(tr);
//   });
// }

// function populateChart() {
//   // copy array and reverse it
//   const reversed = transactions.slice().reverse();
//   let sum = 0;

//   // create date labels for chart
//   const labels = reversed.map(t => {
//     const date = new Date(t.date);
//     return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
//   });

//   // create incremental values for chart
//   const data = reversed.map(t => {
//     sum += parseInt(t.value);
//     return sum;
//   });

//   // remove old chart if it exists
//   if (myChart) {
//     myChart.destroy();
//   }

//   const ctx = document.getElementById("my-chart").getContext("2d");

//   myChart = new Chart(ctx, {
//     type: "line",
//     data: {
//       labels,
//       datasets: [
//         {
//           label: "Total Over Time",
//           fill: true,
//           backgroundColor: "#6666ff",
//           data
//         }
//       ]
//     }
//   });
// }

// function sendTransaction(isAdding) {
//   const nameEl = document.querySelector("#t-name");
//   const amountEl = document.querySelector("#t-amount");
//   const errorEl = document.querySelector("form .error");

//   // validate form
//   if (nameEl.value === "" || amountEl.value === "") {
//     errorEl.textContent = "Missing Information";
//     return;
//   } else {
//     errorEl.textContent = "";
//   }

//   // create record
//   const transaction = {
//     name: nameEl.value,
//     value: amountEl.value,
//     date: new Date().toISOString()
//   };

//   // if subtracting funds, convert amount to negative number
//   if (!isAdding) {
//     transaction.value *= -1;
//   }

//   // add to beginning of current array of data
//   transactions.unshift(transaction);

//   // re-run logic to populate ui with new record
//   populateChart();
//   populateTable();
//   populateTotal();

//   // also send to server
//   fetch("/api/transaction", {
//     method: "POST",
//     body: JSON.stringify(transaction),
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       "Content-Type": "application/json"
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       if (data.errors) {
//         errorEl.textContent = "Missing Information";
//       } else {
//         // clear form
//         nameEl.value = "";
//         amountEl.value = "";
//       }
//     })
//     .catch(err => {
//       // fetch failed, so save in indexed db
//       saveRecord(transaction);

//       // clear form
//       nameEl.value = "";
//       amountEl.value = "";
//     });
// }

// document.querySelector("#add-btn").addEventListener("click", function(event) {
//   event.preventDefault();
//   sendTransaction(true);
// });

// document.querySelector("#sub-btn").addEventListener("click", function(event) {
//   event.preventDefault();
//   sendTransaction(false);
// });
