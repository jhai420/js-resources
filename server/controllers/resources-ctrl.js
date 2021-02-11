const Resource = require('../db/resourcesModels');

const resourceCtrl = {};

resourceCtrl.getResources = (req, res) => {
  Resource.find({}, (err, results) => {
    if (err) {
      return res.status(400).json({ success: false, error: `Error from getResources controller: ${err}` })
    }
    if (!results.length) {
      return res.status(404).json({ success: false, error: 'No resources found '})
    }
    return res.status(200).json( { success: true, data: results })
  })
}

resourceCtrl.getCategories = (req, res) => {
  let category = req.params.category;
  console.log(category);
  Resource.find({ category: category }, (err, results) => {
    if (err) {
      return res.status(400).json({ success: false, error: `Error from getCategories controller: ${err}` })
    }
    if (!results.length) {
      return res.status(404).json({ success: false, error: 'No resources in category found '})
    }
    return res.status(200).json( { success: true, data: results })
  })
}

resourceCtrl.createResource = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({ success: false, error: 'You must provide a resource', })
  }

  Resource.create(body, (err, resource) => {
    if (err) {
      return res.status(400).json({ success: false, error: `Error from createResource controller: ${err}` })
    }
    res.status(200).json({ success: true, id: resource._id, message: 'Resource added!'})
  })
}

resourceCtrl.updateResource = (req, res) => {
  const body = req.body
  const id = req.params.id;

  if (!body) {
    return res.status(400).json({ success: false, error: 'You must provide a body to update', })
  }

  Resource.findOne({ _id: id }, (err, resource) => {
    if (err) {
      return res.status(400).json({ success: false, error: `Error from updateResource controller: ${err}` }) 
    }
    resource.name = body.name;
    resource.type = body.type;
    resource.description = body.description;
    resource.link = body.link;
    resource.category = body.category;
    resource.rating = body.rating;
    resource.tags = body.tags;
    resource.save()
      .then(() => {
        return res.status(200).json({ success: true, id: resource._id, message: 'Resource updated!' })
      })
      .catch(error => {
        return res.status(404).json({error, message: 'Resource not updated!'})
      })
  })
}

resourceCtrl.deleteResource = (req, res) => {
  const id = req.params.id;
  Resource.findOneAndDelete({ _id: id }, (err, resource) => {
    if (err) {
      return res.status(400).json({ success: false, error: `Error from deleteResource controller: ${err}` })
    }
    if (!resource) {
      return res.status(404).json( { success: false, error: 'Resource not found' })
    }
    res.status(200).json({ success: true, data: resource })
  })
}

module.exports = resourceCtrl;