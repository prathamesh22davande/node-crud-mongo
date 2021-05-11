import User from "../models/User.js";

export const getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const getUser = (req, res) => {
  User.find({ uid: req.params.uid })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const addUser = (req, res) => {
  const newUser = new User({
    uid: req.body.uid,
    name: req.body.name,
    mobile: req.body.mobile,
    email: req.body.email,
    dob: req.body.dob,
  });

  newUser
    .save()
    .then((document) => {
      console.log("data inserted");
      res.json({
        state: true,
        msg: "data inserted successully",
        document: document,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

export const deleteUser = (req, res) => {
  User.deleteOne({ uid: req.params.uid })
    .then(() => {
      res.send("User Deleted");
    })
    .catch((err) => {
      res.send(err);
    });
};

// export const updateUser = (req, res) => {
//   const { firstName, lastName, age } = req.body;
//   const { id } = req.params;
//   let user = users.find((user) => user.id == id);

//   if (firstName) user.firstName = firstName;
//   if (lastName) user.lastName = lastName;
//   if (age) user.age = age;

//   res.send(`User with id ${id} has been updated`);
// };
