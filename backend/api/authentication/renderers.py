import json

from api.core.renderers import backendJSONRenderer

class UserJSONRenderer(backendJSONRenderer):

    object_label = 'user'

    def render(self, data, media_type=None, renderer_context=None):
        errors = data.get('errors',None)

        if errors is not None:
            return super(UserJSONRenderer,self).render(data)
        token = data.get('token',None)

        if token is not None and isinstance(token, bytes):
            # Also as mentioned above, we will decode `token` if it is of type
            # bytes.
            data['token'] = token.decode('utf-8')

        # Finally, we can render our data under the "user" namespace.
        return super(UserJSONRenderer,self).render(data)
