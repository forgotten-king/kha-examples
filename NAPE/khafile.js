let project = new Project('NAPE');
project.addAssets('Assets/**');
project.addSources('Sources');
project.addLibrary('nape');
resolve(project);