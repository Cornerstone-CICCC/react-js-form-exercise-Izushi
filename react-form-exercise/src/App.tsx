import { ChangeEvent, FormEvent, useState } from "react";

type FormData = {
  firstname: string;
  lastname: string;
  age: string;
  favoriteFoods: string[];
}

const App = () => {
  /* Your states here */
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    age: "",
    favoriteFoods: [],
  })

  const [users, setUsers] = useState<FormData[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value} = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prevData => {
      const favoriteFoods = checked
      ? [...prevData.favoriteFoods, value]
      : prevData.favoriteFoods.filter(food => food !== value);
      return {
        ...prevData,
        favoriteFoods
      }
    })
  }

  const handleShowUser = () => {
    console.log("Form submitted:", formData);
    setUsers(prevUsers => [...prevUsers, formData]);
  }

  const handleClear = () => {
    setFormData({
      firstname: "",
      lastname: "",
      age: "",
      favoriteFoods: [],
    });
    setUsers([]);
  }

  return (
    <div>
      <h1>User Form</h1>
      <form>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleInputChange} />
        </div>
        <div>
          <label>Favorite Foods:</label>
          <div>
            <input type="checkbox" id="chicken" name="favoriteFoods" value="Chicken" checked={formData.favoriteFoods.includes("Chicken")} onChange={handleCheckboxChange} />
            <label htmlFor="chicken">Chicken</label>
          </div>
          <div>
            <input type="checkbox" id="beef" name="favoriteFoods" value="Beef" checked={formData.favoriteFoods.includes("Beef")} onChange={handleCheckboxChange} />
            <label htmlFor="beef">Beef</label>
          </div>
          <div>
            <input type="checkbox" id="vegetables" name="favoriteFoods" value="Vegetables" checked={formData.favoriteFoods.includes("Vegetables")} onChange={handleCheckboxChange} />
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div>
            <input type="checkbox" id="dessert" name="favoriteFoods" value="Dessert" checked={formData.favoriteFoods.includes("Dessert")} onChange={handleCheckboxChange} />
            <label htmlFor="dessert">Dessert</label>
          </div>
          <div>
            <input type="checkbox" id="pork" name="favoriteFoods" value="Pork" checked={formData.favoriteFoods.includes("Pork")} onChange={handleCheckboxChange} />
            <label htmlFor="pork">Pork</label>
          </div>
        </div>
      </form>
      <button onClick={handleShowUser}>Display User</button>
      <button type="button" onClick={handleClear}>Clear</button>


      <div className="output">
        {/* Display the greeting here */}
        {users.map((user, index) => (
          <div key={index}>
            <h2>{`Hello ${user.firstname} ${user.lastname}, you are ${user.age} years old and your favorite foods are: ${user.favoriteFoods.join(", ")}`}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;