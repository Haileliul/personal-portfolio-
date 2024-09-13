const Education = require("../../db/models/education");
const { Op } = require("sequelize");

// 1 . creating an education
const addEducation = async (req, res) => {
  const body = req.body;
  try {
    if (!req.timeout) {
      let info = {
        title: body.title,
        description: body.description,
        img_memory: body.img_memory,
      };
      const existingeducation = await Education.findOne({
        where: {
          [Op.and]: [{ title: body.title }, { img_memory: body.img_memory }],
        },
      });

      if (existingeducation) {
        // If user already exists, send a conflict response
        return res.status(409).send("An Education  already exists");
      }

      const education = await Education.create(info);
      return res.status(200).send({
        data: education,
        message: "An Education has been added successfully",
      });
      console.log(education);
    } else {
      // Handle timeout error
      res.status(504).send("Request Timeout");
    }
  } catch (err) {
    // If an error occurs during execution, send a 500 Internal Server Error response
    console.error("Error occurred while adding attachment:", err);
    res.status(500).send("Internal Server Error");
  }
};

// 2 . get All Education
const getAllEducation = async (req, res) => {
  try {
    if (!req.timeout) {
      let educations = await Education.findAll({
        // attributes: ["title", "description", "img_memory"],
      });
      // If no attachments are found, send a 404 Not Found response
      if (!educations || educations.length === 0) {
        return res.status(404).json({
          status: "not found",
          message: "No educations were not found",
        });
      }
      //   res.status(200).send(educations);
      res.status(200).json({
        status: "success",
        data: educations,
      });
    } else {
      // Handle timeout error
      return res.status(504).send("Request Timeout");
    }
  } catch (error) {
    // If an error occurs during execution, send a 500 Internal Server Error response
    console.error("Error occurred while fetching attachments:", error);
    return res.status(500).send("Internal Server Error");
  }
};

// 3. get One Education

const getOneEducation = async (req, res) => {
  try {
    if (!req.timeout) {
      let educationId = req.params.educationId;
      let education = await Education.findOne({
        where: { id: educationId },
      });
      // If no attachments are found, send a 404 Not Found response
      if (!education) {
        // return res.status(404).send("No attachments found");
        return res.status(404).json({
          status: "not found",
          message: "No educations were not found",
        });
      }
      // res.status(200).send(education);

      res.status(200).json({
        status: "success",
        data: education,
      });
    } else {
      // Handle timeout error
      res.status(504).send("Request Timeout");
    }
  } catch (error) {
    // If an error occurs during execution, send a 500 Internal Server Error response
    console.error("Error occurred while fetching attachments:", error);
    res.status(500).send("Internal Server Error");
  }
};

// 4. Update a Single Education

const UpdateOneEducation = async (req, res) => {
  const body = req.body;
  try {
    if (!req.timeout) {
      let educationId = req.params.educationId;
      let info = {
        title: body.title,
        description: body.description,
        img_memory: body.img_memory,
      };

      let neweducation = await Education.update(info, {
        where: { id: educationId },
      });
      if (!neweducation) {
        return res.status(404).json({
          status: "not found",
          message: "No education found",
        });
      }
      // res.status(200).send(neweducation);
      return res.status(200).json({
        status: "success",
        data: neweducation,
        message: "An Education has been updated successfully",
      });
    } else {
      // Handle timeout error
      return res.status(504).send("Request Timeout");
    }
  } catch (error) {
    // If an error occurs during execution, send a 500 Internal Server Error response
    console.error("Error occurred while fetching education:", error);
    res.status(500).send("Internal Server Error");
  }
};

// 5. Delete a Single Attachment

const deletOneEducation = async (req, res) => {
  try {
    if (!req.timeout) {
      let educationId = req.params.educationId;
      await Education.destroy({ where: { id: educationId } });
      return res.status(200).json({
        status: "success",
        message: "Education has been deleted",
      });
    } else {
      // Handle timeout error
      res.status(504).send("Request Timeout");
    }
  } catch (error) {
    // If an error occurs during execution, send a 500 Internal Server Error response
    console.error("Error occurred while fetching attachments:", error);
    res.status(500).send("Internal Server Error");
  }
};

// export default {
//   addAttachment,
//   getAllAttachments,
//   getOneAttachment,
//   UpdateOneAttachment,
//   deletOneAttachment,
// };

module.exports = {
  addEducation,
  getAllEducation,
  getOneEducation,
  UpdateOneEducation,
  deletOneEducation,
};
