import {
	ISetting,
	SettingType,
} from '@rocket.chat/apps-engine/definition/settings';

export const settings: ISetting[] = [
	{
		id: 'model',
		i18nLabel: 'Model selection',
		i18nDescription: 'AI model to use for summarization.',
		type: SettingType.SELECT,
		values: [
			{ key: 'llama3-8b:1234', i18nLabel: 'Llama3 8B' },
			{ key: 'mistral-7b', i18nLabel: 'Mistral 7B' },
		],
		required: true,
		public: true,
		packageValue: 'llama3-8b',
	},
	{
		id: 'add-ons',
		i18nLabel: 'Summary add-ons',
		i18nDescription: 'Additional features to enable for the summary command',
		type: SettingType.MULTI_SELECT,
		values: [
			{ key: 'assigned-tasks', i18nLabel: 'Assigned tasks' },
			{ key: 'follow-up-questions', i18nLabel: 'Follow-up questions' },
			{ key: 'participants-summary', i18nLabel: 'Participants summary' },
			{ key: 'file-summary', i18nLabel: 'File summary' },
		],
		required: false,
		public: true,
		packageValue: '',
	},
	{
		id: 'x-auth-token',
		i18nLabel: 'Personal Access Token',
		i18nDescription: 'Must be filled to enable file summary add-on',
		type: SettingType.STRING,
		required: false,
		public: true,
		packageValue: '',
	},
	{
		id: 'x-user-id',
		i18nLabel: 'User ID',
		i18nDescription: 'Must be filled to enable file summary add-on',
		type: SettingType.STRING,
		required: false,
		public: true,
		packageValue: '',
	},
];
