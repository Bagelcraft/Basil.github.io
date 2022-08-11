const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
 overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

if (overlay = document.querySelector('.overlay')) {
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})
}

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const openModelButtons = document.querySelectorAll('[data-model-target]')
const closeModelButtons = document.querySelectorAll('[data-close-button]')
var overlay2 = document.getElementById('overlay2')

openModelButtons.forEach(button => {
  button.addEventListener('click', () => {
    const model = document.querySelector(button.dataset.modelTarget)
    openModel(model)
  })
})

if (overlay2 = document.querySelector('.overlay2')) {
overlay2.addEventListener('click', () => {
  const models = document.querySelectorAll('.model.active')
  models.forEach(model => {
    closeModel(model)
  })
})
}

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const model = button.closest('.model')
    closeModel(model)
  })
})

function openModel(model) {
  if (model == null) return
  model.classList.add('active')
  overlay2.classList.add('active')
}

function closeModel(model) {
  if (model == null) return
  model.classList.remove('active')
  overlay2.classList.remove('active')
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function computeLoan()
{
	var amount = document.getElementById('amount').value;
	var interest_rate = document.getElementById('interest_rate').value;
	var months = document.getElementById('months').value;
	var interest = (amount * (interest_rate * .01)) / months;
	var payment = ((amount / months) + interest).toFixed(2);
	payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('payment').innerHTML = "Monthly Payment = $"+payment;
}


function computeProfit()
{
	var bought = document.getElementById('Bought').value;
	var year = document.getElementById('Years').value;
	var worth = ((bought/100 * 106.89) * year).toFixed(2);
  var profit = worth - bought;
	profit = profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  worth = worth.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById('worth').innerHTML = "Current Worth = $"+worth;
	document.getElementById('Profit').innerHTML = "Profit Earn = $"+profit;
}

function computeTotal()
{
	const Salary = document.getElementById('Salary').value;
	const Downpayment = document.getElementById('Downpayment').value;
	const Payment = document.getElementById('Payment').value;
  const Time = document.getElementById('Time').value;
  let tsalary = parseFloat(Salary * 12);
	let income = (tsalary + Downpayment);
	let expenses = (Payment * 12);
  let Period = (Time * (income - expenses));
  console.log("Salary",Salary,"Downpayment",Downpayment,"Payment",Payment,"Time",Time,"tsalary",tsalary,"income",income,"expenses",expenses,"Period",Period);
	Tpayment = Period.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('Tpayment').innerHTML = "House Worth = $"+Tpayment;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}