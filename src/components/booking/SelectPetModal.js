import { PlusIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import Input from '../../common/Input';
import InputDropdown from '../../common/InputDropdown';
import InputWithSuffix from '../../common/InputWithSuffix';
import Modal from '../../common/Modal';

export default function SelectPetModal({ className }) {
  return (
    <Modal title="Select from existing pets" className={className}>
      <div>
        <p className="text-gray-500">No pets found</p>
      </div>
    </Modal>
  );
}
