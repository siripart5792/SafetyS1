import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  Database, 
  FileText, 
  AlertTriangle, 
  Download, 
  Apple, 
  Smartphone, 
  ShieldCheck, 
  ChevronDown,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 300, damping: 24 } 
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4A148C] via-[#6A1B9A] to-[#311B92] text-white flex flex-col items-center py-12 px-4 selection:bg-purple-300 selection:text-purple-900 font-sans">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-10 text-center"
      >
        <div className="w-24 h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mb-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-[#FDB813]/20" />
          <ShieldCheck className="w-12 h-12 text-[#FDB813]" strokeWidth={1.5} />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
          PEA Safety Smart System
        </h1>
        <p className="text-purple-200 text-sm md:text-base max-w-md">
          ศูนย์รวมบริการและช่องทางการติดต่อด้านความปลอดภัย การไฟฟ้าส่วนภูมิภาค
        </p>
      </motion.div>

      {/* Main Link Group */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full max-w-md space-y-4 flex-1"
      >
        {/* Link 1: Chat Bot */}
        <motion.a 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://pea-chatbot.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block w-full bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-lg transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-400/30 group-hover:bg-purple-500/30 transition-colors">
              <Bot className="w-6 h-6 text-purple-200" />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-lg">Chat Bot</h2>
              <p className="text-xs text-purple-300 opacity-80 mt-0.5">ระบบถาม-ตอบอัตโนมัติ</p>
            </div>
            <ExternalLink className="w-5 h-5 text-purple-300/50 group-hover:text-purple-300 transition-colors" />
          </div>
        </motion.a>

        {/* Link 2: Safety Data Center */}
        <motion.a 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://drive.google.com/drive/mobile/folders/1EcodPYMclZfuwBCtQ5hv_jBUSjhsKKRL" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block w-full bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-lg transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-400/30 group-hover:bg-blue-500/30 transition-colors">
              <Database className="w-6 h-6 text-blue-200" />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-lg">Safety Data Center</h2>
              <p className="text-xs text-purple-300 opacity-80 mt-0.5">ศูนย์ข้อมูลด้านความปลอดภัย</p>
            </div>
            <ExternalLink className="w-5 h-5 text-purple-300/50 group-hover:text-purple-300 transition-colors" />
          </div>
        </motion.a>

        {/* Link 3: คลังแบบฟอร์ม */}
        <motion.a 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://drive.google.com/drive/mobile/folders/1gT2PUAEm_jHggVGHwDW26womQDryufeg?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block w-full bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-lg transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center border border-green-400/30 group-hover:bg-green-500/30 transition-colors">
              <FileText className="w-6 h-6 text-green-200" />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-lg">คลังแบบฟอร์ม</h2>
              <p className="text-xs text-purple-300 opacity-80 mt-0.5">ดาวน์โหลดเอกสารต่างๆ</p>
            </div>
            <ExternalLink className="w-5 h-5 text-purple-300/50 group-hover:text-purple-300 transition-colors" />
          </div>
        </motion.a>

        {/* Link 4: แจ้งปัญหา WeSafe */}
        <motion.a 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://line.me/ti/g2/tb-RxYhPoMbQM2bk2l4hQ6_1Fk6Xu6ejCpTZxQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block w-full bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-lg transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center border border-orange-400/30 group-hover:bg-orange-500/30 transition-colors">
              <AlertTriangle className="w-6 h-6 text-orange-200" />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-lg">แจ้งปัญหา WeSafe</h2>
              <p className="text-xs text-purple-300 opacity-80 mt-0.5">LINE กลุ่มแจ้งเหตุขัดข้อง</p>
            </div>
            <ExternalLink className="w-5 h-5 text-purple-300/50 group-hover:text-purple-300 transition-colors" />
          </div>
        </motion.a>

        {/* Link 5: Download PEA WeSafe (Collapsible) */}
        <motion.div variants={itemVariants} className="w-full">
          <button 
            onClick={() => setIsDownloadOpen(!isDownloadOpen)}
            className="group block w-full bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-lg transition-all text-left focus:outline-none focus:ring-2 focus:ring-purple-400/50"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FDB813]/20 flex items-center justify-center border border-[#FDB813]/30 group-hover:bg-[#FDB813]/30 transition-colors">
                <Download className="w-6 h-6 text-[#FDB813]" />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-lg">Download PEA WeSafe</h2>
                <p className="text-xs text-purple-300 opacity-80 mt-0.5">ดาวน์โหลดแอปพลิเคชัน</p>
              </div>
              <motion.div 
                animate={{ rotate: isDownloadOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-purple-300/70 group-hover:text-purple-300 transition-colors" />
              </motion.div>
            </div>
          </button>

          <AnimatePresence>
            {isDownloadOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                className="mt-2 grid grid-cols-2 gap-3"
              >
                {/* iOS */}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://wesafe.pea.co.th/ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/30 hover:bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-colors"
                >
                  <Apple className="w-8 h-8 text-white" />
                  <span className="font-medium text-sm">App Store</span>
                </motion.a>

                {/* Android */}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://wesafe.pea.co.th/android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3DDC84]/10 hover:bg-[#3DDC84]/20 backdrop-blur-sm border border-[#3DDC84]/20 rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-colors"
                >
                  <Smartphone className="w-8 h-8 text-[#3DDC84]" />
                  <span className="font-medium text-sm text-[#3DDC84]">Google Play</span>
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-12 text-center pb-6"
      >
        <p className="text-[10px] sm:text-xs text-white/40 font-mono tracking-widest uppercase">
          IT SAFETY TRIPPLE PLUS PEA S.1
        </p>
      </motion.div>
    </div>
  );
}
