let project = new Project('NAPE IMPULSE');
project.addAssets('Assets/**');
project.addSources('Sources');
project.addLibrary('nape');
resolve(project);