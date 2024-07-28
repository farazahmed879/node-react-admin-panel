const sideMenuModel = require("../model/sideMenuModel");

const sideMenuController = {
  createSideMenu: async (req, res) => {
    try {
      const { content, type } = req.body;
      const isSideMenuExist = await sideMenuModel.findOne({ type });
      if (isSideMenuExist)
        return res.status(404).json({ message: "Already Exist" });
      await sideMenuModel.create({ content, type });
      return res.status(201).json({ message: "Side Menu Created" });
    } catch (e) {
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getSideMenu: async (req, res) => {
    try {
      const { type } = req.query;
      const isSideMenuExist = await sideMenuModel.findOne({ type });
      if (!isSideMenuExist)
        return res.status(404).json({ message: "Not Exist" });
      return res
        .status(201)
        .json({ message: "Side Menu Created", content: isSideMenuExist });
    } catch (e) {
      res.status(500).json({ message: "Internal server error" });
    }
  },


  addTitle: async (req, res) => {
    try {
      const { title, url, type } = req.body;
      const isSideMenuExist = await sideMenuModel.findOne({ type });
      if (!isSideMenuExist)
        return res.status(404).json({ message: "Not Exist" });
  
      // Ensure that content is an array of objects and then push the new object
      if (!Array.isArray(isSideMenuExist.content)) {
        isSideMenuExist.content = [];
      }
      const check = isSideMenuExist.content.push({ title, url });
  
      console.log('check', isSideMenuExist.content); // Logs the entire updated content array
  
      await isSideMenuExist.save();
      res.status(200).json({ message: "Title and URL added successfully", content: isSideMenuExist.content });
    } catch (e) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  
};

module.exports = sideMenuController;
