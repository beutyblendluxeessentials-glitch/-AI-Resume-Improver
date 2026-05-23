const openaiService = require('../services/openaiService');

const improveResume = async (req, res) => {
  try {
    const { resumeText } = req.body;

    if (!resumeText) {
      return res.status(400).json({ error: 'Resume text is required' });
    }

    const result = await openaiService.processResume(resumeText);
    
    res.json({
      improvedResume: result.improvedResume,
      strongerBulletPoints: result.strongerBulletPoints,
      betterJobDescriptions: result.betterJobDescriptions,
      score: result.score,
      suggestions: result.suggestions
    });
  } catch (error) {
    console.error('Error improving resume:', error);
    res.status(500).json({ error: 'Failed to improve resume' });
  }
};

module.exports = {
  improveResume
};
