import meta from "../../../pages/_meta.js";
import getting_started_meta from "../../../pages/getting-started/_meta.js";
import lua_api_meta from "../../../pages/lua-api/_meta.js";
import source_files_meta from "../../../pages/source-files/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "cli",
  route: "/cli",
  frontMatter: {
    "title": "Command-Line Usage"
  }
}, {
  name: "getting-started",
  route: "/getting-started",
  children: [{
    data: getting_started_meta
  }, {
    name: "installation",
    route: "/getting-started/installation",
    frontMatter: {
      "title": "Installation"
    }
  }, {
    name: "introduction",
    route: "/getting-started/introduction",
    frontMatter: {
      "title": "Introduction"
    }
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "title": "Home"
  }
}, {
  name: "lua-api",
  route: "/lua-api",
  children: [{
    data: lua_api_meta
  }, {
    name: "factory",
    route: "/lua-api/factory",
    frontMatter: {
      "title": "Factory"
    }
  }, {
    name: "scheduler",
    route: "/lua-api/scheduler",
    frontMatter: {
      "title": "Scheduler"
    }
  }, {
    name: "systems",
    route: "/lua-api/systems",
    frontMatter: {
      "title": "Systems"
    }
  }, {
    name: "world",
    route: "/lua-api/world",
    frontMatter: {
      "title": "World"
    }
  }]
}, {
  name: "source-files",
  route: "/source-files",
  children: [{
    data: source_files_meta
  }, {
    name: "archetypes",
    route: "/source-files/archetypes",
    frontMatter: {
      "title": "Archetypes"
    }
  }, {
    name: "components",
    route: "/source-files/components",
    frontMatter: {
      "title": "Components"
    }
  }, {
    name: "options",
    route: "/source-files/options",
    frontMatter: {
      "title": "Options"
    }
  }, {
    name: "systems",
    route: "/source-files/systems",
    frontMatter: {
      "title": "Systems"
    }
  }, {
    name: "tags",
    route: "/source-files/tags",
    frontMatter: {
      "title": "Tags"
    }
  }, {
    name: "types",
    route: "/source-files/types",
    frontMatter: {
      "title": "Types"
    }
  }]
}];