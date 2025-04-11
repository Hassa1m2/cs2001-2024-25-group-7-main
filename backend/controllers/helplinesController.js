const Helpline = require('../models/helplines'); // Use relative path to the model

const getHelplines = async (req, res) => {
  try {
    // Fetch all helplines from MongoDB
    const helplines = await Helpline.find();
    res.status(200).json({
      success: true,
      message: 'List of helplines',
      data: helplines,
    });
  } catch (error) {
    console.error('Error fetching helplines:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch helplines',
    });
  }
};

module.exports = {
  getHelplines,
};
