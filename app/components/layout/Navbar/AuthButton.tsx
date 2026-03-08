'use client'

import { useState } from 'react'
import LoginModal from '../../auth/LoginModal'

interface AuthButtonProps {
  className?: string
  onClick?: () => void
}

export default function AuthButton({ className = '', onClick }: AuthButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleButtonClick = () => {
    console.log('🔐 Auth button clicked - opening modal')
    setIsModalOpen(true)
    // Call parent onClick if provided (for mobile menu close)
    if (onClick) {
      onClick()
    }
  }

  const handleCloseModal = () => {
    console.log('🔐 Closing auth modal')
    setIsModalOpen(false)
  }

  return (
    <>
      {/* Unified Login/Signup Button */}
      <button
        onClick={handleButtonClick}
        className={`bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors ${className}`}
      >
        Login / Sign Up
      </button>

      {/* Login Modal */}
      {isModalOpen && <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </>
  )
}
