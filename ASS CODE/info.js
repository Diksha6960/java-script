
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
      july_month: "40,0000INR",
      aug_month: "50,0000INR",
      jun_month: "65,0000INR",
    },
    address: {
      locality: {
        colony: "OM Vrindavan Society",
        street: "Kanch Pokli,431202",
      },
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
    },
    mobiles: ["+91 8600 3456 88", "1800-4567 32", "+91-9096 5678 77"],
  };
  console.log(employee_info.address).city.state.country.mobiles