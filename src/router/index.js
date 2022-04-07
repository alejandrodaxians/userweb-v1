import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/SendPage.vue'
import Delete from '../views/DeletePage.vue'
import GetId from '../views/GetId.vue'
import SearchAll from '../views/SearchAll.vue'

const routes = [
  {
    path: '/create',
    name: 'post',
    component: HomeView,
    meta: {
      title: 'CREATE',
      metaTags: [
        {
          name: 'description',
          content: 'Sends a request to RequestHandler to deploy a VNF, VNFD, and UCPe.'
        },
        {
          property: 'og:description',
          content: 'Sends a request to RequestHandler to deploy a VNF, VNFD, and UCPe.'
        }
      ]
    }
  },
  {
    path: '/delete',
    name: 'delete',
    component: Delete,
    meta: {
      title: 'DELETE',
      metaTags: [
        {
          name: 'description',
          content: 'Delete a VNF, VNFD, and UCPe.'
        },
        {
          property: 'og:description',
          content: 'Delete a VNF, VNFD, and UCPe.'
        }
      ]
    }
  },
  {
    path: '/getId',
    name: 'getOne',
    component: GetId,
    meta: {
      title: 'GET',
      metaTags: [
        {
          name: 'description',
          content: 'Sends a request to RequestHandler to get request data.'
        },
        {
          property: 'og:description',
          content: 'Sends a request to RequestHandler to get request data.'
        }
      ]
    }
  },
  {
    path: '/',
    name: 'searchAll',
    component: SearchAll,
    meta: {
      title: 'SEARCH',
      metaTags: [
        {
          name: 'description',
          content: 'Returns a list of requests filtered by the given parameters.'
        },
        {
          property: 'og:description',
          content: 'Returns a list of requests filtered by the given parameters.'
        }
      ]
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// ...

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '')

    return tag
  })
  // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag))

  next()
})

// ...

export default router
