import Group from './model';

export const createGroups = async (req, res) => {
  const {
    name,
    description,
    category,
  } = req.body;

  if (!name) {
    return res.status(400).json({ error: true, message: 'Name must bre provided' });
  } else if (typeof name !== 'string') {
    return res.status(400).json({ error: true, message: 'Name must be a string' });
  } else if (name.length < 5) {
    return res.status(400).json({ error: true, message: 'Name must have characters long!' });
  }

  if (!description) {
    return res.status(400).json({ error: true, message: 'Description must bre provided' });
  } else if (typeof description !== 'string') {
    return res.status(400).json({ error: true, message: 'Description must be a string' });
  } else if (description.length < 10) {
    return res.status(400).json({ error: true, message: 'Description must have characters long!' });
  }

  const group = new Group({ name, description });

  try {
    return res.status(201).json({ error: false, group: await group.save() });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Error when created group' });
  }
};

