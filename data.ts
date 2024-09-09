const now = (new Date().getTime() / 1000) | 0;
const inFiveMinutes = now + 5 * 60;

export const payload = {
    // Registered Claims
    iss: 'should-be-an-url',
    sub: 'UserID-123',
    aud: 'audience',
    exp: inFiveMinutes,
    iat: now,
    // Private Claims
    admin: false,
    username: 'johndoe',
    name: 'John Doe',
    email: 'john.doe@example.com',
};

export const sensitivePayload = {
    // Registered Claims
    iss: 'should-be-an-url',
    sub: 'UserID-123',
    aud: 'audience',
    exp: inFiveMinutes,
    iat: now,
    // Private Claims
    admin: false,
    username: 'johndoe',
    name: 'John Doe',
    email: 'john.doe@example.com',
    // Sensitive data
    password: 'my-password',
    creditCard: '1234 5678 9012 3456',
    ssn: '123-45-6789',
    phone: '+1 234 567 8901',
    address: '123 Main St, Anytown, USA',
    dob: '1970-01-01',
    // Embarrassing data
    embarrassing: 'I never miss Zvezde Granda',
};