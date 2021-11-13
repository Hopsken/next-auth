export default function DribbbleProvider(options) {
  return {
    id: 'dribbble',
    name: 'Dribbble',
    type: 'oauth',
    scope: 'public',
    authorization: {
      url: 'https://dribbble.com/oauth/authorize',
      params: { scope: 'public' }
    },
    token: 'https://dribbble.com/oauth/token',
    userinfo: 'https://api.dribbble.com/v2/user',
    checks: ['state'],
    profile(profile) {
      return {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        image: profile.avatar_url
      };
    },
    ...options
  };
};