import create from 'zustand';

export interface ServiceTypeAndOptions {
	type: 'Basic' | 'Special' | 'Premium';
	capacity: number;
}

export interface FormInfo {
	company_name: string;
	company_representative: string;
	company_business_number: string;
	company_business_category: string;
	company_webpage: string;
	company_addrerss: string;
	company_writers: string;

	manager_name: string;
	manager_email: string;
	manager_cell: string;
	manager_phone: string;
	manager_hier: string | null | undefined;

	tax_name: string;
	tax_email: string;

	admin_name: string;
	admin_id: string;
}

export interface ConsentOption {
	consent_marketing: boolean;
}

export type Est = ServiceTypeAndOptions | FormInfo | ConsentOption;

const setType = (
	est: Est | Object,
	serviceTypeAndOptions: ServiceTypeAndOptions,
) => {
	return {
		...est,
		type: serviceTypeAndOptions.type,
		capacity: serviceTypeAndOptions.capacity,
	};
};

const setForms = (est: Est | Object, formInfo: FormInfo) => {
	return {
		...est,
		company_name: formInfo.company_name,
		company_representative: formInfo.company_representative,
		company_business_number: formInfo.company_business_number,
		company_business_category: formInfo.company_business_category,
		company_webpage: formInfo.company_webpage,
		company_addrerss: formInfo.company_addrerss,
		company_writers: formInfo.company_writers,

		manager_name: formInfo.manager_name,
		manager_email: formInfo.manager_email,
		manager_cell: formInfo.manager_cell,
		manager_phone: formInfo.manager_phone,
		manager_hier: formInfo.manager_hier,

		tax_name: formInfo.tax_name,
		tax_email: formInfo.tax_email,

		admin_name: formInfo.admin_name,
		admin_id: formInfo.admin_id,
	};
};

const setConsent = (est: Est | Object, consentOption: ConsentOption) => {
	return {
		...est,
		consent_marketing: consentOption.consent_marketing,
	};
};

type Store = {
	est: Est | Object;
	setType: (serviceTypeAndOptions: ServiceTypeAndOptions) => void;
	setForms: (formInfo: FormInfo) => void;
	setConsent: (consentOption: ConsentOption) => void;
};

const useStore = create<Store>(set => ({
	est: {},

	setType(serviceTypeAndOptions: ServiceTypeAndOptions) {
		set((state: Store) => ({
			...state,
			est: setType(state.est, serviceTypeAndOptions),
		}));
	},

	setForms(formInfo: FormInfo) {
		set((state: Store) => ({
			...state,
			est: setForms(state.est, formInfo),
		}));
	},

	setConsent(consentOption: ConsentOption) {
		set((state: Store) => ({
			...state,
			est: setConsent(state.est, consentOption),
		}));
	},
}));

export default useStore;
