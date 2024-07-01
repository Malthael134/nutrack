import { writable } from 'svelte/store';

const userSettings = writable<UserSettings>({
    colorScheme: 'system',
});

export default userSettings;

export type UserSettings = {
    colorScheme: 'light' | 'dark' | 'system';
};
