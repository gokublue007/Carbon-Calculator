const router = require('express').Router();
const { Trips } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newTrip = await Trips.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTrip);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const tripsData = await Trips.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!tripsData) {
      res.status(404).json({ message: 'No trip found with this id!' });
      return;
    }

    res.status(200).json(tripsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
